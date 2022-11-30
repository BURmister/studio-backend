import {
  Controller,
  Get,
  Param,
  Post,
  HttpCode,
  Header,
  Body,
  HttpStatus,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productService.getAll();
  }

  @Get(':id')
  getOneProduct(@Param('id') id: string) {
    return this.productService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductsDto) {
    return this.productService.create(createProductDto);
  }
}
