import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";
import Link from "next/link";

const formSchema = z.object({
    email: z.string().trim().email(),
    password: z.string().min(1, "Required"),
});

const OnSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
}

export const SignInCard = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });



    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Welcome Back!
                </CardTitle>
            </CardHeader>
            <div className="px-7 mb-2">
                <Separator></Separator>
            </div>
            <CardContent className="p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(OnSubmit)} className="space-y-4">
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                    <Input 
                                        {...field}
                                        type="email"
                                        placeholder="Enter email address"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                        )}
                        />

                        <FormField
                            name="password"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                    <Input 
                                        {...field}
                                        type="password"
                                        placeholder="Enter password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                        )}
                        />
                        <Button disabled={false} size="lg" className="w-full">
                            Log in
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <div className="px-7">
                <Separator />
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button 
                    disabled={false}
                    size="lg"
                    variant="secondary"
                    className="w-full"
                >
                    <FcGoogle className="mr-2" />
                    Log in with Google
                </Button>
                
                <Button
                    disabled={false} 
                    size="lg"
                    className="w-full"
                    variant="secondary"
                >
                    <FaGithub className="mr-2"></FaGithub>
                    Log in with Github
                </Button>
            </CardContent>
                <Separator></Separator>
            <CardContent>
                <div className="flex items-center justify-center">
                    Dont have an account?
                    <Link href="/sign-up" className="text-blue-700">
                        &nbsp; Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}