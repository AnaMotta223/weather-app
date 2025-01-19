import axios from 'axios';

interface PropsTranslation {
    text: String;
    targetLang: String;
    sourceLang: String;
  }

  export const GetTranslation = async ({ text, sourceLang, targetLang } : PropsTranslation) => {
    try {
      const response = await axios.get('https://api.mymemory.translated.net/get', {
        params: {
          q: text,
          langpair: `${sourceLang}|${targetLang}`,
        },
      });
    } 
    catch (error) {
      console.error("Error translating text");
    }
  };