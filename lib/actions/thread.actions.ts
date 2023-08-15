"use server";

import { revalidatePath } from "next/cache";

import { connectToDB } from "../mongoose";

import User from "../models/user.model";
import Thread from "../models/threads.model";

interface Params {
    text: string,
    author: string,
    communityId: string | null,
    path: string,
  }

  export async function createThread({ text, author, communityId, path }: Params
    ) {
      try {
        connectToDB();
    
        const createdThread = await Thread.create({
          text,
          author,
          community:null, // Assign communityId if provided, or leave it null for personal account
        });
    
        // Update User model
        await User.findByIdAndUpdate(author, {
          $push: { threads: createdThread._id },
        });
    
        revalidatePath(path);
      } catch (error: any) {
        throw new Error(`Failed to create thread: ${error.message}`);
      }
    }
    