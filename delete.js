async function deleteUser(token) {
    try {
      const response = await fetch('https://interview-plus.onrender.com/api/delete-user', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        }
      });
  
      if (!response.ok) {
        throw new Error('Delete request failed');
      }
  
      const data = await response.json();
      console.log('User deleted successfully:', data);
      return data; 
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error; 
    }
  }
  