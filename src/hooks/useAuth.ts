// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { storage } from '@/utils/storage';
import { supabase } from '@/supabaseClient';
import { toast } from 'sonner';
import { playIntroSound } from '@/utils/sounds';

export const useAuth = (isMuted: boolean) => {
  const [userName, setUserName] = useState<string | null>(null);
  const [showNameModal, setShowNameModal] = useState(false);
  const [tempName, setTempName] = useState("");
  const [className, setClassName] = useState("");
  const [coachCode, setCoachCode] = useState("");

  useEffect(() => {
    const storedName = storage.loadUserName();
    const storedUserId = localStorage.getItem('lgs_app_user_id');
    if (storedUserId && storedName) {
      setUserName(storedName);
    } else {
      setShowNameModal(true);
    }
  }, []);

  const handleRegistration = async () => {
    const finalName = tempName.trim().toUpperCase();
    const finalClassName = className.trim().toUpperCase();
    const finalCoachCode = coachCode.trim().toLowerCase();

    if (!finalName || !finalClassName || !finalCoachCode) {
        toast.error("Lütfen tüm alanları doldurun.");
        return;
    }
    try {
        const { data: coachData, error: coachError } = await supabase
            .from('koclar')
            .select('eposta')
            .ilike('koc_kodu', finalCoachCode)
            .single();
        
        if (coachError || !coachData) {
            toast.error("Koç kodu bulunamadı. Lütfen kontrol et.");
            return;
        }

        const finalCoachEmail = coachData.eposta;

        const { data: studentData, error: studentError } = await supabase
            .from('ogrenciler')
            .select('*')
            .ilike('ad_soyad', finalName)
            .ilike('sinif', finalClassName)
            .ilike('koc_eposta', finalCoachEmail)
            .single();

        if (studentError || !studentData) {
            toast.error("Bilgiler eşleşmedi. Ad, sınıf ve koç kodunu kontrol et.");
            return;
        }

        let newUserId;

        const { data: existingUserData } = await supabase
            .from('kullanicilar')
            .select('id')
            .ilike('ad_soyad', finalName)
            .ilike('koc_eposta', finalCoachEmail)
            .maybeSingle();

        if (existingUserData) {
            newUserId = existingUserData.id;
        } else {
            const { data: newUserData, error: newUserError } = await supabase
                .from('kullanicilar')
                .insert({ ad_soyad: finalName, koc_eposta: finalCoachEmail })
                .select('id')
                .single();

            if (newUserError || !newUserData) {
                toast.error("Kullanıcı kimliği oluşturulurken bir hata oluştu.");
                throw newUserError || new Error("Yeni kullanıcı ID'si alınamadı.");
            }
            newUserId = newUserData.id;
        }

        await supabase
            .from('ogrenciler')
            .update({ baglanan_kullanici_id: newUserId })
            .eq('id', studentData.id);
        
        localStorage.setItem('lgs_app_user_id', newUserId);
        storage.saveUserName(studentData.ad_soyad);
        setUserName(studentData.ad_soyad);
        setShowNameModal(false);
        toast.success(`Hoş geldin, ${studentData.ad_soyad}! Giriş başarılı.`);
        playIntroSound(isMuted);

        setTimeout(() => window.location.reload(), 1000); 

    } catch (error) {
        console.error("Kayıt sırasında beklenmedik hata:", error);
        toast.error("Giriş yapılırken bir hata oluştu. Lütfen internet bağlantını kontrol et.");
    }
  };

  return {
    userName,
    showNameModal,
    tempName,
    setTempName,
    className,
    setClassName,
    coachCode,
    setCoachCode,
    handleRegistration
  };
};