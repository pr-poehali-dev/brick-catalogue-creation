import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface HomePageProps {
  onSectionChange: (section: 'home' | 'catalog' | 'prices' | 'contacts') => void;
}

const HomePage = ({ onSectionChange }: HomePageProps) => {
  return (
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
                onClick={() => onSectionChange('catalog')}
              >
                <Icon name="Grid3x3" className="mr-2" size={20} />
                Перейти в каталог
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#333333]"
                onClick={() => onSectionChange('contacts')}
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
};

export default HomePage;
