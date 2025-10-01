import { Separator } from '@/components/ui/separator';

interface FooterProps {
  onSectionChange: (section: 'home' | 'catalog' | 'prices' | 'contacts') => void;
}

const Footer = ({ onSectionChange }: FooterProps) => {
  return (
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
                <button onClick={() => onSectionChange('home')} className="text-gray-400 hover:text-[#F97316] transition-colors">
                  Главная
                </button>
              </li>
              <li>
                <button onClick={() => onSectionChange('catalog')} className="text-gray-400 hover:text-[#F97316] transition-colors">
                  Каталог товаров
                </button>
              </li>
              <li>
                <button onClick={() => onSectionChange('prices')} className="text-gray-400 hover:text-[#F97316] transition-colors">
                  Цены и прайс-лист
                </button>
              </li>
              <li>
                <button onClick={() => onSectionChange('contacts')} className="text-gray-400 hover:text-[#F97316] transition-colors">
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
  );
};

export default Footer;
