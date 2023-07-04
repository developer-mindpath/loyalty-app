import APIUtils from "@/utils/api";
import { GET_METHOD, PATCH_METHOD } from "@/utils/constants/apiMethods";
import type { IResponseWithBody } from "@/types/api";
import type {
  ITranslationFields,
  IGetTranslationResponse,
} from "@/types/translations";

/**
 * Translations Service
 */
export default class TranslationService {
  /**
   * Get Translations
   */
  public static async get() {
    const response = await APIUtils.send<
      IResponseWithBody<IGetTranslationResponse>
    >({
      url: "/api/translation/setting",
      method: GET_METHOD,
    });
    return response.data.body;
  }

  /**
   * Update Translations
   */
  public static async update(payload: Partial<ITranslationFields>) {
    await APIUtils.send({
      url: "/api/translation/setting",
      method: PATCH_METHOD,
    });
    return payload;
  }
}
