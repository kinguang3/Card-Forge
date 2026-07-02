import { useState, useEffect, useCallback } from 'react';
import { CardData, DEFAULT_CARD_DATA, TEMPLATES } from '../types/card';

const STORAGE_KEY = 'card-creator-data';

export function useCardData() {
  const [cardData, setCardData] = useState<CardData>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return { ...DEFAULT_CARD_DATA, ...parsed };
      } catch {
        return DEFAULT_CARD_DATA;
      }
    }
    return DEFAULT_CARD_DATA;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cardData));
  }, [cardData]);

  const updateField = useCallback(<K extends keyof CardData>(
    field: K,
    value: CardData[K]
  ) => {
    setCardData(prev => ({ ...prev, [field]: value }));
  }, []);

  const applyTemplate = useCallback((templateId: string) => {
    const template = TEMPLATES.find(t => t.id === templateId);
    if (template) {
      setCardData(prev => ({
        ...prev,
        backgroundColor: template.backgroundColor,
        borderColor: template.borderColor,
        textColor: template.textColor,
        template: templateId
      }));
    }
  }, []);

  const resetToDefault = useCallback(() => {
    setCardData(DEFAULT_CARD_DATA);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const uploadImage = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setCardData(prev => ({ ...prev, imageUrl: result }));
    };
    reader.readAsDataURL(file);
  }, []);

  const removeImage = useCallback(() => {
    setCardData(prev => ({ ...prev, imageUrl: '' }));
  }, []);

  return {
    cardData,
    updateField,
    applyTemplate,
    resetToDefault,
    uploadImage,
    removeImage
  };
}