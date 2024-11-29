import { useState } from 'react';
import { donorService } from '@/services/api';
import { useToast } from '@/components/ui/use-toast';

export function useDonorSubmit() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await donorService.register(data);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        toast({
          title: 'Registration Successful',
          description: 'Welcome to BloodLife!'
        });

        return true;
      }
    } catch (error) {
      toast({
        title: 'Registration Failed',
        description: error.response?.data?.message || 'Something went wrong',
        variant: 'destructive'
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading };
}