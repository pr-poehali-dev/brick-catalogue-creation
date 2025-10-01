import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface Product {
  id: number;
  name: string;
  type: 'штучный' | 'на сетке';
  color: string;
  image: string;
  specs: {
    coverage: string;
    price: number;
    composition: string;
  };
}

const products: Product[] = [
  {
    id: 1,
    name: 'Кирпич красный',
    type: 'штучный',
    color: 'Красный',
    image: '🧱',
    specs: {
      coverage: '48 шт/м²',
      price: 1200,
      composition: 'Полимерная песчаная композиция'
    }
  },
  {
    id: 2,
    name: 'Кирпич коричневый',
    type: 'штучный',
    color: 'Коричневый',
    image: '🧱',
    specs: {
      coverage: '48 шт/м²',
      price: 1200,
      composition: 'Полимерная песчаная композиция'
    }
  },
  {
    id: 3,
    name: 'Кирпич серый',
    type: 'штучный',
    color: 'Серый',
    image: '🧱',
    specs: {
      coverage: '48 шт/м²',
      price: 1200,
      composition: 'Полимерная песчаная композиция'
    }
  },
  {
    id: 4,
    name: 'Кирпич бежевый',
    type: 'штучный',
    color: 'Бежевый',
    image: '🧱',
    specs: {
      coverage: '48 шт/м²',
      price: 1200,
      composition: 'Полимерная песчаная композиция'
    }
  },
  {
    id: 5,
    name: 'Кирпич на сетке красный',
    type: 'на сетке',
    color: 'Красный',
    image: '📐',
    specs: {
      coverage: '48 шт/м²',
      price: 1200,
      composition: 'Полимерная песчаная композиция'
    }
  },
  {
    id: 6,
    name: 'Кирпич на сетке коричневый',
    type: 'на сетке',
    color: 'Коричневый',
    image: '📐',
    specs: {
      coverage: '48 шт/м²',
      price: 1200,
      composition: 'Полимерная песчаная композиция'
    }
  }
];

const CatalogPage = () => {
  return (
    <div className="py-16 bg-[#F1F1F1] min-h-screen animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#F97316]"></div>
            <span className="text-[#F97316] font-semibold">ПРОДУКЦИЯ</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-[#333333]">КАТАЛОГ ТОВАРОВ</h1>
          <p className="text-xl text-muted-foreground">Широкий ассортимент фасадного гибкого кирпича</p>
        </div>

        <div className="mb-12 grid md:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/img/b612ee47-5a9e-4768-aa70-cd5b28d8d7ec.jpg" 
              alt="Облицовка фасада гибким кирпичом" 
              className="w-full h-64 object-cover"
            />
            <div className="bg-white p-4">
              <h3 className="font-bold text-lg">Фасад</h3>
              <p className="text-sm text-muted-foreground">Примеры облицовки фасадов</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/img/d3461413-7f42-479c-af60-799fbba0320c.jpg" 
              alt="Облицовка цоколя гибким кирпичом" 
              className="w-full h-64 object-cover"
            />
            <div className="bg-white p-4">
              <h3 className="font-bold text-lg">Цоколь</h3>
              <p className="text-sm text-muted-foreground">Примеры облицовки цоколя</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/img/774837ec-0ca5-4e86-bf16-b30451480c9f.jpg" 
              alt="Готовый дом с гибким кирпичом" 
              className="w-full h-64 object-cover"
            />
            <div className="bg-white p-4">
              <h3 className="font-bold text-lg">Готовые объекты</h3>
              <p className="text-sm text-muted-foreground">Примеры выполненных работ</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="text-6xl mb-4 text-center">{product.image}</div>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <Badge variant="secondary" className="bg-[#333333] text-white">
                    {product.type}
                  </Badge>
                </div>
                <CardDescription className="text-base">Цвет: {product.color}</CardDescription>
              </CardHeader>
              <CardContent>
                <Separator className="mb-4" />
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Покрытие:</span>
                    <span className="font-semibold">{product.specs.coverage}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Состав:</span>
                    <span className="font-semibold text-xs">{product.specs.composition}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <span className="text-sm font-semibold">Цена:</span>
                    <span className="text-2xl font-bold text-[#F97316]">{product.specs.price} ₽/м²</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-[#F97316] hover:bg-[#ea6c0d]">
                  <Icon name="ShoppingCart" className="mr-2" size={18} />
                  Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;