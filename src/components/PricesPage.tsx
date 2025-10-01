import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface PricesPageProps {
  onSectionChange: (section: 'home' | 'catalog' | 'prices' | 'contacts') => void;
}

const PricesPage = ({ onSectionChange }: PricesPageProps) => {
  return (
    <div className="py-16 min-h-screen animate-fade-in">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#F97316]"></div>
            <span className="text-[#F97316] font-semibold">СТОИМОСТЬ</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-[#333333]">ЦЕНЫ И ПРАЙС-ЛИСТ</h1>
          <p className="text-xl text-muted-foreground">Прозрачное ценообразование на всю продукцию</p>
        </div>

        <div className="mb-8 grid md:grid-cols-3 gap-4">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/img/b612ee47-5a9e-4768-aa70-cd5b28d8d7ec.jpg" 
              alt="Облицовка фасада" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/img/d3461413-7f42-479c-af60-799fbba0320c.jpg" 
              alt="Облицовка цоколя" 
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/img/774837ec-0ca5-4e86-bf16-b30451480c9f.jpg" 
              alt="Готовый объект" 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>

        <Card className="mb-8 border-2 border-[#F97316]">
          <CardHeader className="bg-[#333333] text-white">
            <CardTitle className="text-2xl">БАЗОВАЯ ЦЕНА</CardTitle>
            <CardDescription className="text-gray-300">
              Единая цена для всех типов и цветов
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-[#F97316] mb-2">1200 ₽</div>
              <div className="text-2xl text-muted-foreground">за квадратный метр</div>
            </div>
            <Separator className="my-6" />
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Icon name="Package" className="text-[#F97316]" size={20} />
                  Что входит в цену:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-[#F97316] mt-1" size={16} />
                    <span className="text-sm">48 кирпичиков на м²</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-[#F97316] mt-1" size={16} />
                    <span className="text-sm">Полимерная песчаная композиция</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-[#F97316] mt-1" size={16} />
                    <span className="text-sm">Гарантия качества</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-[#F97316] mt-1" size={16} />
                    <span className="text-sm">Техническая поддержка</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Icon name="Info" className="text-[#F97316]" size={20} />
                  Дополнительно:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Truck" className="text-[#F97316] mt-1" size={16} />
                    <span className="text-sm">Доставка рассчитывается отдельно</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Users" className="text-[#F97316] mt-1" size={16} />
                    <span className="text-sm">Монтаж под ключ (опционально)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Percent" className="text-[#F97316] mt-1" size={16} />
                    <span className="text-sm">Скидки при заказе от 50 м²</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="FileText" className="text-[#F97316] mt-1" size={16} />
                    <span className="text-sm">Консультация по расчету</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="bg-[#F1F1F1]">
              <CardTitle className="flex items-center gap-2">
                <Icon name="FileSpreadsheet" className="text-[#F97316]" size={24} />
                Штучный кирпич
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span>Красный</span>
                  <span className="font-bold">1200 ₽/м²</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Коричневый</span>
                  <span className="font-bold">1200 ₽/м²</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Серый</span>
                  <span className="font-bold">1200 ₽/м²</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Бежевый</span>
                  <span className="font-bold">1200 ₽/м²</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-[#F1F1F1]">
              <CardTitle className="flex items-center gap-2">
                <Icon name="Grid3x3" className="text-[#F97316]" size={24} />
                Кирпич на сетке
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span>Красный на сетке</span>
                  <span className="font-bold">1200 ₽/м²</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Коричневый на сетке</span>
                  <span className="font-bold">1200 ₽/м²</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Серый на сетке</span>
                  <span className="font-bold">1200 ₽/м²</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Бежевый на сетке</span>
                  <span className="font-bold">1200 ₽/м²</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-[#F97316] text-white border-none">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Нужна консультация по расчету?</h3>
                <p className="text-white/90">Позвоните нам, поможем рассчитать нужное количество материала</p>
              </div>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => onSectionChange('contacts')}
                className="bg-white text-[#F97316] hover:bg-gray-100"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PricesPage;