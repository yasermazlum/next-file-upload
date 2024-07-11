"use server";
import fs from "node:fs/promises";
import { revalidatePath } from "next/cache";

export async function uploadFile(formData: FormData): Promise<boolean> {
    try {
        const file = formData.get("file") as File;
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);

        await fs.writeFile(`./public/uploads/${file.name}`, buffer);

        revalidatePath("/");
        return true
    } catch (error) {
        console.log('File upload error: ', error)
        return false
    }
}