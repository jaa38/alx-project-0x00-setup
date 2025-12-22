import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC = () => {
  return (
    <div className='p-4'>
      <h1 className='text-xl font-extralight mb-4'>Landing Page</h1>

      {/* SMALL BUTTONS */}
      <div className='flex gap-3 mb-4'>
        <Button title='Small' styles='text-sm rounded-sm' />
        <Button title='Small' styles='text-sm rounded-md' />
        <Button title='Small' styles='text-sm rounded-full' />
      </div>

      {/* MEDIUM BUTTONS */}
      <div className='flex gap-3 mb-4'>
        <Button title='Medium' styles='text-base rounded-lg' />
      </div>

      {/* LARGE BUTTONS */}
      <div className='flex gap-3 mb-6'>
        <Button title='Large' styles='text-lg px-6 py-3 rounded-full' />
      </div>

      {/* CARD COMPONENT */}
      <Card />
    </div>
  );
};

export default Landing;
