export interface TScan {
  success: boolean;
  status: string;
  message: string;
  validationTime: string;
  productInfo: ProductInfo;
}

interface ProductInfo {
  productName: string;
  productImg: string;
}
