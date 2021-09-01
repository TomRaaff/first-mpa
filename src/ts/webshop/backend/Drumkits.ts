import { Product } from '../types/Product';
import { Collection } from 'tr-utilities-lib';

export function getDrumkits(): Promise<Collection<Product>> {
	return new Promise((resolve) => {
		setTimeout(() => resolve(drumkits), 800);
	});
}

export function getDrumkit(id: string): Promise<Product> {
	return new Promise((resolve, reject) => {
		const product = drumkits.findOne({ id });
		if (product) {
			setTimeout(() => resolve(product), 600);
		} else {
			reject(new Error('Not found'));
		}
	});
}

const drumkits: Collection<Product> =
		Collection.of([
						  {
							  id: '111',
							  brandName: 'Gretsch',
							  productName: 'Catalina club',
							  rating: 3,
							  price: 899,
							  imageUrl: './img/gretsch.jpg',
							  attributes: {
								  color: 'black',
								  bassdrumSize: 20,
								  cymbalsIncluded: false,
								  hardwareIncluded: true,
							  },
							  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper nulla lacus, id maximus eros lobortis sit amet. Vivamus hendrerit sed orci sit amet mattis. Vestibulum cursus, sapien a tincidunt dignissim, dui arcu commodo felis, eu malesuada risus tortor et dui. Curabitur vitae vulputate ipsum. Sed pellentesque eros at efficitur vulputate. Proin quis lectus mattis quam lacinia vehicula aliquam vel magna. In magna massa, elementum et justo rhoncus, dignissim semper mauris. Donec velit enim, cursus lobortis dolor quis, congue sodales diam. Ut sed massa lacus. Mauris placerat ligula ultricies, efficitur justo a, ornare metus. Nulla consectetur interdum elit sed tempus. Quisque non augue mauris. Sed in tempus mauris, nec efficitur massa.'
						  },
						  {
							  id: '222',
							  brandName: 'Gretsch',
							  productName: 'Brooklyn',
							  rating: 2,
							  price: 1299,
							  imageUrl: './img/gretsch_red.png',
							  attributes: {
								  color: 'red',
								  bassdrumSize: 18,
								  cymbalsIncluded: false,
								  hardwareIncluded: true,
							  },
							  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper nulla lacus, id maximus eros lobortis sit amet. Vivamus hendrerit sed orci sit amet mattis. Vestibulum cursus, sapien a tincidunt dignissim, dui arcu commodo felis, eu malesuada risus tortor et dui. Curabitur vitae vulputate ipsum. Sed pellentesque eros at efficitur vulputate. Proin quis lectus mattis quam lacinia vehicula aliquam vel magna. In magna massa, elementum et justo rhoncus, dignissim semper mauris. Donec velit enim, cursus lobortis dolor quis, congue sodales diam. Ut sed massa lacus. Mauris placerat ligula ultricies, efficitur justo a, ornare metus. Nulla consectetur interdum elit sed tempus. Quisque non augue mauris. Sed in tempus mauris, nec efficitur massa.'
						  },
						  {
							  id: '333',
							  brandName: 'Ludwig',
							  productName: 'Classic Oak',
							  rating: 3,
							  price: 950,
							  imageUrl: './img/ludwig_classic_oak.jpg',
							  attributes: {
								  color: 'brown',
								  bassdrumSize: 22,
								  cymbalsIncluded: true,
								  hardwareIncluded: true,
							  },
							  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper nulla lacus, id maximus eros lobortis sit amet. Vivamus hendrerit sed orci sit amet mattis. Vestibulum cursus, sapien a tincidunt dignissim, dui arcu commodo felis, eu malesuada risus tortor et dui. Curabitur vitae vulputate ipsum. Sed pellentesque eros at efficitur vulputate. Proin quis lectus mattis quam lacinia vehicula aliquam vel magna. In magna massa, elementum et justo rhoncus, dignissim semper mauris. Donec velit enim, cursus lobortis dolor quis, congue sodales diam. Ut sed massa lacus. Mauris placerat ligula ultricies, efficitur justo a, ornare metus. Nulla consectetur interdum elit sed tempus. Quisque non augue mauris. Sed in tempus mauris, nec efficitur massa.'
						  },
						  {
							  id: '444',
							  brandName: 'Yamaha',
							  productName: 'Stage Custom Birch',
							  rating: 1,
							  price: 749,
							  imageUrl: './img/Yamaha_stage_custom.jpg',
							  attributes: {
								  color: 'brown',
								  bassdrumSize: 22,
								  cymbalsIncluded: false,
								  hardwareIncluded: false,
							  },
							  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper nulla lacus, id maximus eros lobortis sit amet. Vivamus hendrerit sed orci sit amet mattis. Vestibulum cursus, sapien a tincidunt dignissim, dui arcu commodo felis, eu malesuada risus tortor et dui. Curabitur vitae vulputate ipsum. Sed pellentesque eros at efficitur vulputate. Proin quis lectus mattis quam lacinia vehicula aliquam vel magna. In magna massa, elementum et justo rhoncus, dignissim semper mauris. Donec velit enim, cursus lobortis dolor quis, congue sodales diam. Ut sed massa lacus. Mauris placerat ligula ultricies, efficitur justo a, ornare metus. Nulla consectetur interdum elit sed tempus. Quisque non augue mauris. Sed in tempus mauris, nec efficitur massa.'
						  },
						  {
							  id: '555',
							  brandName: 'Tama',
							  productName: 'Imperial star',
							  rating: 4,
							  price: 865,
							  imageUrl: './img/tama_imperial_star.webp',
							  attributes: {
								  color: 'black',
								  bassdrumSize: 22,
								  cymbalsIncluded: false,
								  hardwareIncluded: true,
							  },
							  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper nulla lacus, id maximus eros lobortis sit amet. Vivamus hendrerit sed orci sit amet mattis. Vestibulum cursus, sapien a tincidunt dignissim, dui arcu commodo felis, eu malesuada risus tortor et dui. Curabitur vitae vulputate ipsum. Sed pellentesque eros at efficitur vulputate. Proin quis lectus mattis quam lacinia vehicula aliquam vel magna. In magna massa, elementum et justo rhoncus, dignissim semper mauris. Donec velit enim, cursus lobortis dolor quis, congue sodales diam. Ut sed massa lacus. Mauris placerat ligula ultricies, efficitur justo a, ornare metus. Nulla consectetur interdum elit sed tempus. Quisque non augue mauris. Sed in tempus mauris, nec efficitur massa.'
						  },
					  ]);
