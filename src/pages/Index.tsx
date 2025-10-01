import { useState } from 'react';
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

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'catalog' | 'prices' | 'contacts'>('home');

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

  const renderHome = () => (
    <div className="animate-fade-in">
      <section className="relative bg-[#333333] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-[#F97316]"></div>
              <Badge variant="outline" className="border-[#F97316] text-[#F97316] bg-transparent">
                СТРОИТЕЛЬНЫЕ МАТЕРИАЛЫ
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              ФАСАДНЫЙ<br/>ГИБКИЙ КИРПИЧ
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Инновационное решение для облицовки фасадов. Полимерная песчаная композиция с превосходными техническими характеристиками.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-[#F97316] hover:bg-[#ea6c0d] text-white"
                onClick={() => setActiveSection('catalog')}
              >
                <Icon name="Grid3x3" className="mr-2" size={20} />
                Перейти в каталог
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#333333]"
                onClick={() => setActiveSection('contacts')}
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F1F1F1]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#333333]">ТЕХНИЧЕСКИЕ ПРЕИМУЩЕСТВА</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-[#F97316] flex items-center justify-center mb-4">
                  <Icon name="Shield" size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl">ДОЛГОВЕЧНОСТЬ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Срок службы более 50 лет. Устойчивость к температурам от -50°C до +80°C
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-[#F97316] flex items-center justify-center mb-4">
                  <Icon name="Droplet" size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl">ВЛАГОСТОЙКОСТЬ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Водопоглощение менее 0.5%. Не подвержен разрушению от циклов замерзания
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-[#F97316] flex items-center justify-center mb-4">
                  <Icon name="Zap" size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl">ПРОСТОЙ МОНТАЖ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Гибкая структура позволяет монтировать на любые поверхности. Малый вес
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-1 bg-[#F97316]"></div>
                <span className="text-[#F97316] font-semibold">СПЕЦИФИКАЦИЯ</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-[#333333]">
                ТЕХНИЧЕСКИЕ<br/>ХАРАКТЕРИСТИКИ
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#F97316] mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Плотность покрытия</p>
                    <p className="text-muted-foreground">48 кирпичиков на квадратный метр</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#F97316] mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Состав</p>
                    <p className="text-muted-foreground">Полимерная песчаная композиция</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#F97316] mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Варианты исполнения</p>
                    <p className="text-muted-foreground">Штучный и на сетке</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#F97316] mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Цветовая гамма</p>
                    <p className="text-muted-foreground">Широкий выбор цветов</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F1F1F1] p-8 rounded-lg" style={{
              backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-6xl mb-4 text-center">🏗️</div>
                <h3 className="text-2xl font-bold text-center mb-2">УНИВЕРСАЛЬНОЕ ПРИМЕНЕНИЕ</h3>
                <p className="text-center text-muted-foreground">
                  Идеально подходит для облицовки фасадов жилых домов, коммерческих зданий и промышленных объектов
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderCatalog = () => (
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

  const renderPrices = () => (
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
                onClick={() => setActiveSection('contacts')}
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

  const renderContacts = () => (
    <div className="py-16 min-h-screen bg-[#F1F1F1] animate-fade-in">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#F97316]"></div>
            <span className="text-[#F97316] font-semibold">СВЯЗЬ</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-[#333333]">КОНТАКТЫ</h1>
          <p className="text-xl text-muted-foreground">Свяжитесь с нами для консультации и заказа</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2 border-[#F97316]">
            <CardHeader className="bg-[#333333] text-white">
              <CardTitle className="flex items-center gap-2">
                <Icon name="Phone" size={24} />
                Телефон для связи
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <a 
                href="tel:89331968277" 
                className="text-4xl font-bold text-[#F97316] hover:text-[#ea6c0d] transition-colors block mb-4"
              >
                8 (933) 196-82-77
              </a>
              <p className="text-muted-foreground mb-4">Звоните в рабочие дни с 9:00 до 18:00</p>
              <Button className="w-full bg-[#F97316] hover:bg-[#ea6c0d]" size="lg" asChild>
                <a href="tel:89331968277">
                  <Icon name="PhoneCall" className="mr-2" size={20} />
                  Позвонить сейчас
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-[#F1F1F1]">
              <CardTitle className="flex items-center gap-2">
                <Icon name="MessageSquare" size={24} />
                Мессенджеры
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start" size="lg" asChild>
                  <a href="https://wa.me/79331968277" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg" asChild>
                  <a href="https://t.me/79331968277" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" className="mr-2" size={20} />
                    Telegram
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg" asChild>
                  <a href="viber://chat?number=79331968277" target="_blank" rel="noopener noreferrer">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Viber
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Clock" size={24} className="text-[#F97316]" />
              Режим работы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold mb-2">Понедельник - Пятница</p>
                <p className="text-muted-foreground">9:00 - 18:00</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Суббота - Воскресенье</p>
                <p className="text-muted-foreground">Выходной</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 bg-[#333333] text-white border-none">
          <CardContent className="pt-6">
            <div className="text-center">
              <Icon name="Info" size={48} className="text-[#F97316] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Бесплатная консультация</h3>
              <p className="text-gray-300 mb-6">
                Наши специалисты помогут выбрать подходящий материал, рассчитают количество и стоимость заказа
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge variant="secondary" className="bg-[#F97316] text-white text-sm py-2 px-4">
                  <Icon name="Calculator" className="mr-2" size={16} />
                  Расчет материалов
                </Badge>
                <Badge variant="secondary" className="bg-[#F97316] text-white text-sm py-2 px-4">
                  <Icon name="FileText" className="mr-2" size={16} />
                  Подбор цвета
                </Badge>
                <Badge variant="secondary" className="bg-[#F97316] text-white text-sm py-2 px-4">
                  <Icon name="Wrench" className="mr-2" size={16} />
                  Рекомендации по монтажу
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <nav className="bg-[#333333] text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F97316] rounded flex items-center justify-center font-bold text-xl">
                ФК
              </div>
              <div>
                <div className="font-bold text-lg">ФАСАДНЫЙ КИРПИЧ</div>
                <div className="text-xs text-gray-400">Полимерная композиция</div>
              </div>
            </div>
            <div className="hidden md:flex gap-1">
              <Button
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('home')}
                className={activeSection === 'home' ? 'bg-[#F97316] hover:bg-[#ea6c0d]' : 'text-white hover:bg-[#444444]'}
              >
                <Icon name="Home" className="mr-2" size={18} />
                Главная
              </Button>
              <Button
                variant={activeSection === 'catalog' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('catalog')}
                className={activeSection === 'catalog' ? 'bg-[#F97316] hover:bg-[#ea6c0d]' : 'text-white hover:bg-[#444444]'}
              >
                <Icon name="Grid3x3" className="mr-2" size={18} />
                Каталог
              </Button>
              <Button
                variant={activeSection === 'prices' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('prices')}
                className={activeSection === 'prices' ? 'bg-[#F97316] hover:bg-[#ea6c0d]' : 'text-white hover:bg-[#444444]'}
              >
                <Icon name="DollarSign" className="mr-2" size={18} />
                Цены
              </Button>
              <Button
                variant={activeSection === 'contacts' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('contacts')}
                className={activeSection === 'contacts' ? 'bg-[#F97316] hover:bg-[#ea6c0d]' : 'text-white hover:bg-[#444444]'}
              >
                <Icon name="Phone" className="mr-2" size={18} />
                Контакты
              </Button>
            </div>
            <a href="tel:89331968277" className="hidden md:block">
              <Button className="bg-[#F97316] hover:bg-[#ea6c0d]">
                <Icon name="Phone" className="mr-2" size={18} />
                8 (933) 196-82-77
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && renderHome()}
      {activeSection === 'catalog' && renderCatalog()}
      {activeSection === 'prices' && renderPrices()}
      {activeSection === 'contacts' && renderContacts()}

      <footer className="bg-[#333333] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#F97316] rounded flex items-center justify-center font-bold text-xl">
                  ФК
                </div>
                <div className="font-bold text-lg">ФАСАДНЫЙ КИРПИЧ</div>
              </div>
              <p className="text-gray-400 text-sm">
                Качественные строительные материалы для облицовки фасадов
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Разделы</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => setActiveSection('home')} className="text-gray-400 hover:text-[#F97316] transition-colors">
                    Главная
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection('catalog')} className="text-gray-400 hover:text-[#F97316] transition-colors">
                    Каталог товаров
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection('prices')} className="text-gray-400 hover:text-[#F97316] transition-colors">
                    Цены и прайс-лист
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection('contacts')} className="text-gray-400 hover:text-[#F97316] transition-colors">
                    Контакты
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">
                  <a href="tel:89331968277" className="hover:text-[#F97316] transition-colors">
                    8 (933) 196-82-77
                  </a>
                </li>
                <li className="text-gray-400">Пн-Пт: 9:00 - 18:00</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-sm text-gray-400">
            © 2025 Фасадный гибкий кирпич. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
