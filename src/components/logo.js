/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/logo-workoda.png';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src={logo} style={{height: 30, marginTop: '5%', marginLeft: '25%'}} alt="startup landing logo" />
    </Link>
  );
}
