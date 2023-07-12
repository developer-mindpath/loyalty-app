import { UpdateResult } from "typeorm";
import UpdateCustomerRequestDTO from "../dto/webhook/updateCustomerRequestDto";
import InsertCustomerRequestDTO from "../dto/webhook/insertCustomerRequestDto";
import CustomerService from "./customerService";

export default class WebhookService {
  private _customerService: CustomerService;
  constructor() {
    this._customerService = new CustomerService();
  }

  public async createCustomer(
    insertCustomerRequestDTO: InsertCustomerRequestDTO
  ): Promise<void> {
    return await this._customerService.createCustomer(insertCustomerRequestDTO);
  }

  public async updateCustomer(
    updateCustomerRequestDTO: UpdateCustomerRequestDTO
  ): Promise<UpdateResult> {
    return await this._customerService.updateCustomer(updateCustomerRequestDTO);
  }
}
