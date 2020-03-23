import { setLang } from './Language/LanguageResolver';
import {
  setAuthorizePersonProfileInfo,
  setCompanyProfileInfo,
  setInitialRoute,
  setTempMerchantId,
  resetCacheData
} from './Registration/RegistrationResolver';
// import { setTempMerchantId } from './Registration/TemporaryLoginResolver';

export default {
  Mutation: {
    setLang,
    setAuthorizePersonProfileInfo,
    setCompanyProfileInfo,
    setInitialRoute,
    setTempMerchantId,
    resetCacheData
  }
};
