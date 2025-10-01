import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ContactsPage = () => {
  return (
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
};

export default ContactsPage;
