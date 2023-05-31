import { UpdateResult } from "typeorm";
import InsertDedicatedPageRequestDTO from "../dto/dedicatedPage/insertDedicatedPageRequestDto";
import { OnsiteDedicatedPageModel } from "../database/models/onsiteDedicatedPage";
import DedicatedPageRepository from "../repository/dedicatedPageRepository";
import { GetDedicatedPageResponse } from "../types/response/dedicatedPage/getDedicatedPageResponse";
import UpdateDedicatedPageRequestDTO from "../dto/dedicatedPage/updateDedicatedPageRequestDto";
import InsertDedicatedPageBannerRequestDTO from "../dto/dedicatedPage/insertDedicatedPageBannerRequestDto";
import { OnsiteDedicatedPageBannerModel } from "../database/models/onsiteDedicatedPageBanner";
import DedicatedPageBannerService from "./dedicatedPageBannerService";
import { GetDedicatedPageBannerResponse } from "../types/response/dedicatedPage/getDedicatedPageBannerResponse";
import UpdateDedicatedPageBannerRequestDTO from "../dto/dedicatedPage/updateDedicatedPageBannerRequestDto";
import InsertDedicatedPageExplainerRequestDTO from "../dto/dedicatedPage/insertDedicatedPageExplainerRequestDto";
import { OnsiteDedicatedPageExplainerModel } from "../database/models/onsiteDedicatedPageExplainer";
import { GetDedicatedPageExplainerResponse } from "../types/response/dedicatedPage/getDedicatedPageExplainerResponse";
import UpdateDedicatedPageExplainerRequestDTO from "../dto/dedicatedPage/updateDedicatedPageExplainerRequestDto";
import DedicatedPageExplainerService from "./dedicatedPageExplainerService";
import InsertDedicatedPageReferralRequestDTO from "../dto/dedicatedPage/insertDedicatedPageReferralRequestDto";
import { OnsiteDedicatedPageReferralModel } from "../database/models/onsiteDedicatedPageReferral";
import DedicatedPageReferralService from "./dedicatedPageReferralService";
import { GetDedicatedPageReferralResponse } from "../types/response/dedicatedPage/getDedicatedPageReferralResponse";
import UpdateDedicatedPageReferralRequestDTO from "../dto/dedicatedPage/updateDedicatedPageReferralRequestDto";
import InsertDedicatedPageWayToEarnRequestDTO from "../dto/dedicatedPage/insertDedicatedPageWayToEarnRequestDto";
import { GetDedicatedPageWayToEarnResponse } from "../types/response/dedicatedPage/getDedicatedPageWayToEarnResponse";
import UpdateDedicatedPageWayToEarnRequestDTO from "../dto/dedicatedPage/updateDedicatedPageWayToEarnRequestDto";
import DedicatedPageWayToEarnService from "./dedicatedPageWayToEarnService";
import { OnsiteDedicatedPageWaysToEarnModel } from "../database/models/onsiteDedicatedPageWaysToEarn";
import InsertDedicatedPageWayToRedeemRequestDTO from "../dto/dedicatedPage/insertDedicatedPageWayToRedeemRequestDto";
import { OnsiteDedicatedPageWaysToRedeemModel } from "../database/models/onsiteDedicatedPageWaysToRedeem";
import DedicatedPageWayToRedeemService from "./dedicatedPageWayToRedeemService";
import { GetDedicatedPageWayToRedeemResponse } from "../types/response/dedicatedPage/getDedicatedPageWayToRedeemResponse";
import UpdateDedicatedPageWayToRedeemRequestDTO from "../dto/dedicatedPage/updateDedicatedPageWayToRedeemRequestDto";
import InsertDedicatedPageVipTierRequestDTO from "../dto/dedicatedPage/insertDedicatedPageVipTierRequestDto";
import { OnsiteDedicatedPageVipTierModel } from "../database/models/onsiteDedicatedPageVipTier";
import { GetDedicatedPageVipTierResponse } from "../types/response/dedicatedPage/getDedicatedPageVipTierResponse";
import UpdateDedicatedPageVipTierRequestDTO from "../dto/dedicatedPage/updateDedicatedPageVipTierRequestDto";
import DedicatedPageVipTierService from "./dedicatedPageVipTierService";

export default class DedicatedPageService {
  private _dedicatedPageRepository: DedicatedPageRepository;
  private _dedicatedPageBannerService: DedicatedPageBannerService;
  private _dedicatedPageExplainerService: DedicatedPageExplainerService;
  private _dedicatedPageReferralService: DedicatedPageReferralService;
  private _dedicatedPageWayToEarnService: DedicatedPageWayToEarnService;
  private _dedicatedPageWayToRedeemService: DedicatedPageWayToRedeemService;
  private _dedicatedPageVipTierService: DedicatedPageVipTierService;
  constructor() {
    this._dedicatedPageRepository = new DedicatedPageRepository();
    this._dedicatedPageBannerService = new DedicatedPageBannerService();
    this._dedicatedPageExplainerService = new DedicatedPageExplainerService();
    this._dedicatedPageReferralService = new DedicatedPageReferralService();
    this._dedicatedPageWayToEarnService = new DedicatedPageWayToEarnService();
    this._dedicatedPageWayToRedeemService =
      new DedicatedPageWayToRedeemService();
    this._dedicatedPageVipTierService = new DedicatedPageVipTierService();
  }

  public async insertDedicatedPage(
    insertDedicatedPageRequestDTO: InsertDedicatedPageRequestDTO
  ): Promise<OnsiteDedicatedPageModel> {
    return await this._dedicatedPageRepository.insertDedicatedPage(
      insertDedicatedPageRequestDTO
    );
  }

  public async getDedicatedPage(
    userId: number
  ): Promise<GetDedicatedPageResponse> {
    const dedicatedPageResponse =
      await this._dedicatedPageRepository.getDedicatedPage(userId);
    return dedicatedPageResponse
      ? dedicatedPageResponse
      : ({} as GetDedicatedPageResponse);
  }

  public async updateDedicatedPage(
    updateDedicatedPageRequestDTO: UpdateDedicatedPageRequestDTO
  ): Promise<UpdateResult> {
    return await this._dedicatedPageRepository.updateDedicatedPage(
      updateDedicatedPageRequestDTO
    );
  }

  public async insertDedicatedPageBanner(
    insertDedicatedPageBannerRequestDTO: InsertDedicatedPageBannerRequestDTO
  ): Promise<OnsiteDedicatedPageBannerModel> {
    return await this._dedicatedPageBannerService.insertDedicatedPageBanner(
      insertDedicatedPageBannerRequestDTO
    );
  }

  public async getDedicatedPageBanner(
    userId: number
  ): Promise<GetDedicatedPageBannerResponse> {
    const dedicatedPageResponse =
      await this._dedicatedPageBannerService.getDedicatedPageBanner(userId);
    return dedicatedPageResponse
      ? dedicatedPageResponse
      : ({} as GetDedicatedPageBannerResponse);
  }

  public async updateDedicatedPageBanner(
    updateDedicatedPageBannerRequestDTO: UpdateDedicatedPageBannerRequestDTO
  ): Promise<UpdateResult> {
    return await this._dedicatedPageBannerService.updateDedicatedPageBanner(
      updateDedicatedPageBannerRequestDTO
    );
  }

  public async insertDedicatedPageExplainer(
    insertDedicatedPageExplainerRequestDTO: InsertDedicatedPageExplainerRequestDTO
  ): Promise<OnsiteDedicatedPageExplainerModel> {
    return await this._dedicatedPageExplainerService.insertDedicatedPageExplainer(
      insertDedicatedPageExplainerRequestDTO
    );
  }

  public async getDedicatedPageExplainer(
    userId: number
  ): Promise<GetDedicatedPageExplainerResponse> {
    const dedicatedPageResponse =
      await this._dedicatedPageExplainerService.getDedicatedPageExplainer(
        userId
      );
    return dedicatedPageResponse
      ? dedicatedPageResponse
      : ({} as GetDedicatedPageExplainerResponse);
  }

  public async updateDedicatedPageExplainer(
    updateDedicatedPageExplainerRequestDTO: UpdateDedicatedPageExplainerRequestDTO
  ): Promise<UpdateResult> {
    return await this._dedicatedPageExplainerService.updateDedicatedPageExplainer(
      updateDedicatedPageExplainerRequestDTO
    );
  }

  public async insertDedicatedPageReferral(
    insertDedicatedPageReferralRequestDTO: InsertDedicatedPageReferralRequestDTO
  ): Promise<OnsiteDedicatedPageReferralModel> {
    return await this._dedicatedPageReferralService.insertDedicatedPageReferral(
      insertDedicatedPageReferralRequestDTO
    );
  }

  public async getDedicatedPageReferral(
    userId: number
  ): Promise<GetDedicatedPageReferralResponse> {
    const dedicatedPageResponse =
      await this._dedicatedPageReferralService.getDedicatedPageReferral(userId);
    return dedicatedPageResponse
      ? dedicatedPageResponse
      : ({} as GetDedicatedPageReferralResponse);
  }

  public async updateDedicatedPageReferral(
    updateDedicatedPageReferralRequestDTO: UpdateDedicatedPageReferralRequestDTO
  ): Promise<UpdateResult> {
    return await this._dedicatedPageReferralService.updateDedicatedPageReferral(
      updateDedicatedPageReferralRequestDTO
    );
  }

  public async insertDedicatedPageWayToEarn(
    insertDedicatedPageWayToEarnRequestDTO: InsertDedicatedPageWayToEarnRequestDTO
  ): Promise<OnsiteDedicatedPageWaysToEarnModel> {
    return await this._dedicatedPageWayToEarnService.insertDedicatedPageWayToEarn(
      insertDedicatedPageWayToEarnRequestDTO
    );
  }

  public async getDedicatedPageWayToEarn(
    userId: number
  ): Promise<GetDedicatedPageWayToEarnResponse> {
    const dedicatedPageResponse =
      await this._dedicatedPageWayToEarnService.getDedicatedPageWayToEarn(
        userId
      );
    return dedicatedPageResponse
      ? dedicatedPageResponse
      : ({} as GetDedicatedPageWayToEarnResponse);
  }

  public async updateDedicatedPageWayToEarn(
    updateDedicatedPageWayToEarnRequestDTO: UpdateDedicatedPageWayToEarnRequestDTO
  ): Promise<UpdateResult> {
    return await this._dedicatedPageWayToEarnService.updateDedicatedPageWayToEarn(
      updateDedicatedPageWayToEarnRequestDTO
    );
  }

  public async insertDedicatedPageWayToRedeem(
    insertDedicatedPageWayToRedeemRequestDTO: InsertDedicatedPageWayToRedeemRequestDTO
  ): Promise<OnsiteDedicatedPageWaysToRedeemModel> {
    return await this._dedicatedPageWayToRedeemService.insertDedicatedPageWayToRedeem(
      insertDedicatedPageWayToRedeemRequestDTO
    );
  }

  public async getDedicatedPageWayToRedeem(
    userId: number
  ): Promise<GetDedicatedPageWayToRedeemResponse> {
    const dedicatedPageResponse =
      await this._dedicatedPageWayToRedeemService.getDedicatedPageWayToRedeem(
        userId
      );
    return dedicatedPageResponse
      ? dedicatedPageResponse
      : ({} as GetDedicatedPageWayToRedeemResponse);
  }

  public async updateDedicatedPageWayToRedeem(
    updateDedicatedPageWayToRedeemRequestDTO: UpdateDedicatedPageWayToRedeemRequestDTO
  ): Promise<UpdateResult> {
    return await this._dedicatedPageWayToRedeemService.updateDedicatedPageWayToRedeem(
      updateDedicatedPageWayToRedeemRequestDTO
    );
  }

  public async insertDedicatedPageVipTier(
    insertDedicatedPageVipTierRequestDTO: InsertDedicatedPageVipTierRequestDTO
  ): Promise<OnsiteDedicatedPageVipTierModel> {
    return await this._dedicatedPageVipTierService.insertDedicatedPageVipTier(
      insertDedicatedPageVipTierRequestDTO
    );
  }

  public async getDedicatedPageVipTier(
    userId: number
  ): Promise<GetDedicatedPageVipTierResponse> {
    const dedicatedPageResponse =
      await this._dedicatedPageVipTierService.getDedicatedPageVipTier(userId);
    return dedicatedPageResponse
      ? dedicatedPageResponse
      : ({} as GetDedicatedPageVipTierResponse);
  }

  public async updateDedicatedPageVipTier(
    updateDedicatedPageVipTierRequestDTO: UpdateDedicatedPageVipTierRequestDTO
  ): Promise<UpdateResult> {
    return await this._dedicatedPageVipTierService.updateDedicatedPageVipTier(
      updateDedicatedPageVipTierRequestDTO
    );
  }
}
