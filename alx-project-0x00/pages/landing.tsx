import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className='text-xl font-extralight'>Landing Page</h1>
      <div className='flex gap-4 mt-6 flex-wrap'>
        {/* Small buttons */}
        <Button
          title='Small Rounded SM'
          styles='text-sm px-3 py-1 rounded sm'
        />
        <Button
          title='Small Rounded MD'
          styles='text-sm px-3 py-1 rounded-md'
        />
        <Button
          title='Small Rounded Full'
          styles='text-sm px-3 py-1 rounded-full'
        />

        {/* Medium buttons */}
        <Button
          title='Medium Rounded SM'
          styles='text-base px-4 py-2 rounded-sm'
        />
        <Button
          title='Medium Rounded MD'
          styles='text-base px-4 py-2 rounded-md'
        />
        <Button
          title='Medium Rounded Full'
          styles='text-base px-4 py-2 rounded-full'
        />

        {/* Large buttons */}
        <Button
          title='Large Rounded SM'
          styles='text-lg px-6 py-3 rounded-sm'
        />
        <Button
          title='Large Rounded MD'
          styles='text-lg px-6 py-3 rounded-md'
        />
        <Button
          title='Large Rounded Full'
          styles='text-lg px-6 py-3 rounded-full'
        />
      </div>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
