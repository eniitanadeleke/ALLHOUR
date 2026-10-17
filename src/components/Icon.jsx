// Site-wide icon set. Lucide glyphs at a heavier stroke so they read clearly at small sizes.
// Icons inherit colour from the parent and size from font-size (1em square).
import {
  ArrowRight, FileCheck2, ShieldCheck, Ban, Check, X, CircleHelp, Plus,
  Package, Store, Truck, Landmark, ShoppingCart, Warehouse, Fuel, House, Building2,
  Ruler, MonitorSmartphone, GraduationCap, Megaphone, LifeBuoy,
  LayoutGrid, Smartphone, Wrench, CreditCard, Sprout, Tag, TrendingUp,
  ClipboardList, BadgeCheck, Repeat, MapPin, Wallet, UserRound, Mail, Handshake,
  Eye, Target, Compass,
} from 'lucide-react';

const icons = {
  'arrow-right': ArrowRight,
  'file-check': FileCheck2,
  'shield-check': ShieldCheck,
  ban: Ban,
  check: Check,
  x: X,
  question: CircleHelp,
  plus: Plus,
  package: Package,
  store: Store,
  truck: Truck,
  bank: Landmark,
  cart: ShoppingCart,
  warehouse: Warehouse,
  fuel: Fuel,
  house: House,
  building: Building2,
  ruler: Ruler,
  systems: MonitorSmartphone,
  training: GraduationCap,
  megaphone: Megaphone,
  support: LifeBuoy,
  grid: LayoutGrid,
  phone: Smartphone,
  wrench: Wrench,
  card: CreditCard,
  sprout: Sprout,
  tag: Tag,
  growth: TrendingUp,
  clipboard: ClipboardList,
  approved: BadgeCheck,
  repeat: Repeat,
  pin: MapPin,
  wallet: Wallet,
  user: UserRound,
  mail: Mail,
  handshake: Handshake,
  eye: Eye,
  target: Target,
  compass: Compass,
};

export default function Icon({ name, className = '', strokeWidth = 2.5 }) {
  const Glyph = icons[name];
  return (
    <Glyph
      className={`icon ${className}`.trim()}
      strokeWidth={strokeWidth}
      absoluteStrokeWidth={false}
      aria-hidden="true"
      focusable="false"
    />
  );
}
