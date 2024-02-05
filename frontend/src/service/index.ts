import {ICar} from "@/types/Car";

export async function fetchData(url: string): Promise<ICar[]> {
    try {
        console.log(url);
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during fetch:', error);
        return [];
    }
}