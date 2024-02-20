type Result = {
  translations: [
    {
      detected_source_language: string;
      text: string;
    }
  ];
};

export const translate = async (seletedText: string, userTargetLang: string) => {
  const API_KEY = 'aa365688-b4ae-4727-aeb7-129d7034a0ad:fx';
  const API_URL = 'https://api-free.deepl.com/v2/translate';

  const params = {
    auth_key: API_KEY,
    text: seletedText,
    target_lang: userTargetLang,
  };

  const query = new URLSearchParams(params);
  const url = API_URL + '?' + query;
  const res = await fetch(url, {
    method: 'POST',
    mode: 'cors',
  });

  const json: Result = await res.json();
  return json.translations[0].text;
};
