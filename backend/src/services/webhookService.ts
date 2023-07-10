import InsertCustomerRequestDTO from "../dto/webhook/InsertCustomerRequestDto";
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
}
