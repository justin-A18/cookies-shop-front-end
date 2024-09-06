import { ProductEntity } from "@/core/entities";

export class ProductsMapper {
	static fromEntity(product: ProductEntity) {
		return {
			id: product.id,
			name: product.name,
			description: product.description,
			price: product.price,
			images: product.images,
			isNovelty: product.isNovelty,
			stock: product.stock
		};
	}

	static fromEntities(products: ProductEntity[]) {
		return products.map((product) => ProductsMapper.fromEntity(product));
	}
}