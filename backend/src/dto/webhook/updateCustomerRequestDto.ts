import { UpdateCustomerRequest } from "../../types/request/webhook/updateCustomerRequest";

export default class UpdateCustomerRequestDTO {
  shopify_customer_id: string;
  customer_name: string;
  customer_email: string;

  constructor(body: UpdateCustomerRequest) {
    this.shopify_customer_id = body.id;
    this.customer_name = `${body.first_name} ${body.last_name}`;
    this.customer_email = body.email;
  }
}
