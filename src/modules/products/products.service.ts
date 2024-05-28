import { Injectable } from '@nestjs/common';
import { CreateManyProducts, CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from '../../entities';
import { ReadProductDto } from './dto/read-product.dto';
import { plainToClass, plainToInstance } from 'class-transformer';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product) private readonly _productRepository: Repository<Product>
  ) {}

  async create(createProductDto: CreateProductDto): Promise<void> {

    await this._productRepository.insert(Object.assign(createProductDto, new Product()));
  }
  async createMany(createProductsDto: CreateManyProducts): Promise<void>{

    const products = createProductsDto.products.map(x => Object.assign(x, new Product()));
    await this._productRepository.insert(products);
  }
  async findAll(): Promise<ReadProductDto[]> {
  return (await this._productRepository.find()).map(x => new ReadProductDto(x.productName));
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
