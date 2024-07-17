"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";

const FormSchema = z.object({
  partySize: z.string({
    required_error: "Please select the number of people.",
  }),
  date: z.string({
    required_error: "Please select a date.",
  }),
  time: z.string({
    required_error: "Please select a time.",
  }),
});

export function SelectForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const formattedDate = new Date(data.date).toISOString().split("T")[0];

    // Saati 24 saat formatına çevir ve URL kodlaması uygula
    const [hours, minutes] = data.time.split(":");
    const formattedTime = `${hours.padStart(2, "0")}%3A${minutes}`;

    const url = `https://www.opentable.com/restref/client/?rid=255070&restref=255070&partysize=${data.partySize}&datetime=${formattedDate}T${formattedTime}&lang=en-US`;
    window.open(url, "_blank");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="partySize"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-jost">Number of People</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select number of people" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} People
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-jost">Date</FormLabel>
              <FormControl>
                <Input className="text-white" type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-jost">Time</FormLabel>
              <FormControl>
                <Input className="text-white" type="time" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-[22px]">
          Book Now
          <span className="pointer-events-none absolute inset-0 m-1">
            <span className="absolute left-0 top-0 h-px w-0 bg-button-border opacity-50 transition-all duration-700 ease-in-out group-hover:w-full"></span>
            <span className="absolute bottom-0 right-0 h-px w-0 bg-button-border opacity-50 transition-all duration-700 ease-in-out group-hover:w-full"></span>
            <span className="absolute left-0 top-0 h-0 w-px bg-button-border opacity-50 transition-all delay-100 duration-700 ease-in-out group-hover:h-full"></span>
            <span className="absolute bottom-0 right-0 h-0 w-px bg-button-border opacity-50 transition-all delay-100 duration-700 ease-in-out group-hover:h-full"></span>
          </span>
        </Button>
      </form>
    </Form>
  );
}
