import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa"
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";

const formSchema = z.object({
    name: z.string().trim().min(1, "Name is Required"),
    email: z.string().trim().email(),
    password: z.string().min(8, "Minimum of 8 characters Required"),
});

const OnSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
}


export const SignUpCard = () => {
    
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
                    Sign Up
                </CardTitle>
            </CardHeader>
            <div className="px-7 mb-2">
                <Separator></Separator>
            </div>

            <CardDescription>
                <div className="flex justify-center items-center">
                By signing up, you agree to our {" "}
                </div>
                <div className="flex justify-center items-center">
                <Link href="/privacy">
                    <span className="text-blue-700">
                        &nbsp; Privacy Policy
                    </span>
                </Link> {" "}
                &nbsp; and {" "}
                <Link href="/terms">
                    <span className="text-blue-700">
                    &nbsp; Terms of Service
                    </span>
                </Link>
                </div>
            </CardDescription>
            
            <CardContent className="p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(OnSubmit)} className="space-y-4">
                        <FormField
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                    <Input 
                                        {...field}
                                        type="text"
                                        placeholder="Type name"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                        )}
                        />

                        
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                    <Input 
                                        {...field}
                                        type="email"
                                        placeholder="Enter Email Address"
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
                                        placeholder="Enter Password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                        )}
                        />
                        <Button disabled={false} size="lg" className="w-full">
                            Sign up
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
                    Already have an account?
                    <Link href="/sign-in" className="text-blue-700">
                        &nbsp; Sign in
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}