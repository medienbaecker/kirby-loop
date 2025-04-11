let translations = $state<Record<string, string>>({});

export const t = (key: string, fallback?: string): string => {
    return translations[key] || fallback || key;
};

export const setTranslations = (newTranslations: Record<string, string>) => {
    translations = newTranslations;
};