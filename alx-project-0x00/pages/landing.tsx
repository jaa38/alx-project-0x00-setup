import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=' text-xl font-extralight'>Landing Page</h1>

      {/* Small Buttons */}
      <div className='flex gap-3 mb-4'>
        <Button title='Small' className='text-sm rounded-sm' />
        <Button title='Small' className='text-sm rounded-md' />
        <Button title='Small' className='text-sm rounded=full' />
      </div>

      {/* Medium Buttons */}
      <div className='flex gap-3 mb-6'>
        <Button title='Medium' className='text-base rounded-sm' />
        <Button title='Medium' className='text-base rounded-md' />
        <Button title='Medium' className='text-base rounded=full' />
      </div>

      {/* Card Component */}
      <div className='flex gap-3 mb-6'>
        <Button title='Large' className='text-lg px-6 rounded-sm' />
        <Button title='Large' className='text-lg px-6 rounded-md' />
        <Button title='Large' className='text-lg px-6 rounded=full' />
      </div>
      <Card />
    </div>
  );
};

export default Landing;
