'use server'

// DeleteAction.ts

import { connectToDatabase } from '..';
import Product from '../models/product.model';
import { revalidatePath } from 'next/cache';
import User from '../models/user.model';

export const deleteProduct = async (id: string) => {
  try {
    // Ensure database connection
    await connectToDatabase();

    // Attempt to delete product
    const deletedProduct = await Product.findByIdAndDelete(id);

    // Handle case where product with given ID doesn't exist
    if (!deletedProduct) {
      throw new Error('Product not found');
    }

    // Revalidate path after successful deletion
    revalidatePath('/dashboard/products');
  } catch (error) {
    console.error('Error deleting product:', error);
    throw new Error('Failed to delete product');
  }
};
 


export const deleteUser = async (id: string) => {
    try {
      // Ensure database connection
      await connectToDatabase();
  
      // Attempt to delete user
      const deletedUser = await User.findByIdAndDelete(id);
  
      // Handle case where user with given ID doesn't exist
      if (!deletedUser) {
        throw new Error('user not found');
      }
  
      // Revalidate path after successful deletion
      revalidatePath('/dashboard/users');
    } catch (error) {
      console.error('Error deleting user:', error);
      throw new Error('Failed to delete user');
    }
  };


