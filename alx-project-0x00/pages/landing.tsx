import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC = () => {
  return (
    <div className='p-4'>
      <h1 className='text-xl font-extralight mb-4'>Landing Page</h1>

      {/* SMALL BUTTONS */}
      <div className='flex gap-3 mb-4'>
        <Button title='Small' className='text-sm rounded-sm' />
        <Button title='Small' className='text-sm rounded-md' />
        <Button title='Small' className='text-sm rounded-full' />
      </div>

      {/* MEDIUM BUTTONS */}
      <div className='flex gap-3 mb-4'>
        <Button title='Medium' className='text-base rounded-sm' />
        <Button title='Medium' className='text-base rounded-md' />
        <Button title='Medium' className='text-base rounded-full' />
      </div>

      {/* LARGE BUTTONS */}
      <div className='flex gap-3 mb-6'>
        <Button title='Large' className='text-lg px-6 py-3 rounded-sm' />
        <Button title='Large' className='text-lg px-6 py-3 rounded-md' />
        <Button title='Large' className='text-lg px-6 py-3 rounded-full' />
      </div>

      {/* CARD COMPONENT */}
      <Card />
    </div>
  );
};

export default Landing;
