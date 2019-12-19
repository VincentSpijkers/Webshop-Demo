export class Product {

  public productName: string;
  public id: number;
  public imageUrl: string;
  public description: string;
  public price: number;
  public isLiked: boolean;


  constructor(productName: string, id: number, imageUrl: string, description: string, price: number, isLiked: boolean) {
    this.productName = productName;
    this.id = id;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.isLiked = isLiked;
  }
}
