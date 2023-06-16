import PaginationDTO from "../dto/paginationDTO";
import { GetCustomerResponse } from "../types/response/customer/getCustomerResponse";
import CustomerRepository from "../repository/customerRepository";
import { GetCustomerDetailsResponse } from "../types/response/customer/getCustomerDetailsResponse";

export default class CustomerService {
  private _customerRepository: CustomerRepository;
  constructor() {
    this._customerRepository = new CustomerRepository();
  }

  public async getCustomers(
    userId: number,
    paginationDTO: PaginationDTO
  ): Promise<Array<GetCustomerResponse>> {
    return await this._customerRepository.getCustomers(userId, paginationDTO);
  }

  public async getCustomerDetail(
    customerId: number
  ): Promise<GetCustomerDetailsResponse> {
    return await this._customerRepository.getCustomerDetail(customerId);
  }
}
