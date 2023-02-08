import { IsNotEmpty } from 'class-validator';

export class OderDto {
  @IsNotEmpty()
  brand: string;

  @IsNotEmpty()
  transactionType: string;

  @IsNotEmpty()
  totalOrders: string;

  @IsNotEmpty()
  totalOrderValue: number;

  @IsNotEmpty()
  grossMarginPercentage: number;
}
