import axios from 'axios';
import { toast } from "sonner";

import { BadgeCheck,CircleX } from "lucide-react";

export async function SubmitForm(formData: any, userId: number, categoryId: number,): Promise<void> {
  try {
    // Modify the form data to match the expected format
    const requestBody = {
      categoryId,
      userId,
      name: formData.productName,
      description: formData.description,
      price: formData.price,
      stock: 2, 
      image: formData.image,
    };
    // console.log(requestBody)

    // Send POST request with credentials (cookies) included
    const response = await axios.post('https://renergy-hub-express-backend.onrender.com/api/v1/products', requestBody, {
      
      headers: {
        'Content-Type': 'multipart/form-data',
      },

      
    });

    console.log('Product submitted successfully:', response.data);
    toast("Added product: Successfully", {
      description: "The product has been added successfully",
      icon: <BadgeCheck className="text-[#002603]" />,  });
  } catch (error) {
    console.error('Error submitting product:', error);
    toast("Failed to add product", {
      description: "The product has not been added successfully, please try again",
      icon: <CircleX className="text-red-500" />,  });
  }
}
