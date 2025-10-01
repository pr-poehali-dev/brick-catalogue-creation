import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: 'home' | 'catalog' | 'prices' | 'contacts';
  onSectionChange: (section: 'home' | 'catalog' | 'prices' | 'contacts') => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  return (
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
              onClick={() => onSectionChange('home')}
              className={activeSection === 'home' ? 'bg-[#F97316] hover:bg-[#ea6c0d]' : 'text-white hover:bg-[#444444]'}
            >
              <Icon name="Home" className="mr-2" size={18} />
              Главная
            </Button>
            <Button
              variant={activeSection === 'catalog' ? 'default' : 'ghost'}
              onClick={() => onSectionChange('catalog')}
              className={activeSection === 'catalog' ? 'bg-[#F97316] hover:bg-[#ea6c0d]' : 'text-white hover:bg-[#444444]'}
            >
              <Icon name="Grid3x3" className="mr-2" size={18} />
              Каталог
            </Button>
            <Button
              variant={activeSection === 'prices' ? 'default' : 'ghost'}
              onClick={() => onSectionChange('prices')}
              className={activeSection === 'prices' ? 'bg-[#F97316] hover:bg-[#ea6c0d]' : 'text-white hover:bg-[#444444]'}
            >
              <Icon name="DollarSign" className="mr-2" size={18} />
              Цены
            </Button>
            <Button
              variant={activeSection === 'contacts' ? 'default' : 'ghost'}
              onClick={() => onSectionChange('contacts')}
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
  );
};

export default Navigation;
