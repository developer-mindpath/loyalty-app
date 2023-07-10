import moment from "moment";
import { InsertCustomerRequest } from "../../types/request/webhook/insertCustomerRequest";

export default class InsertCustomerRequestDTO {
  shopify_customer_id: string;
  customer_name: string;
  customer_email: string;
  customer_type: string;
  customer_joining_date: Date;

  constructor(body: InsertCustomerRequest) {
    this.shopify_customer_id = body.id;
    this.customer_name = `${body.first_name} ${body.last_name}`;
    this.customer_email = body.email;
    this.customer_type = "Guest";
    this.customer_joining_date = moment(body.created_at).utc().toDate();
  }
}
