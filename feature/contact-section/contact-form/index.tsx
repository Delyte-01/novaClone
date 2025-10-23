"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { industries } from "@/data";
import { useServiceAnimation } from "@/hooks/use-service-animation";
import { Mail, MapPin, Phone } from "lucide-react";
import React, { useRef } from "react";

const ContactForm = () =>
{
  const contactRef = useRef<HTMLDivElement>(null);
    
    useServiceAnimation(contactRef as React.RefObject<HTMLDivElement>);
  return (
    <div className="container-padding min-h-screen py-20" ref={contactRef}>
      <div className="max-w-7xl flex flex-col md:flex-row h-full gap-4">
        <div className="flex-1 md:max-w-[500px] content1">
          <div className="flex flex-col gap-4 py-3">
            <h1 className="text-[#1b4962] poppins-bold text-2xl md:text-3xl">Let’s Connect!</h1>
            <p>
              At NovaHills Consulting Limited, we are committed to supporting
              your business growth at every stage. Whether you are ready to kick
              off a project, exploring your options, or just have a few
              questions, our team is here and ready to help.
            </p>
          </div>
          <hr className="h-1 bg-foreground mb-3"/>
          <div>
            <div className="flex gap-3 items-center py-2">
              <span>
                <MapPin />
              </span>
              <div>
                <h2>Head Office</h2>
                <p>
                  5th floor, ICAN Building, 82 Murtala Muhammed Way, Lagos,
                  Nigeria
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center py-2">
              <span>
                <Phone />
              </span>
              <div>
                <h2>Call Us Within Nigeria</h2>
                <p>
                  <span>+234 903 803 3790</span>
                  <span>+234 814 820 9655</span>{" "}
                </p>
              </div>
            </div>
            <div className="inline items-center py-2 ">
              <p>Outside Nigeria</p>
              <p>+1 (647) 675-1414</p>
            </div>
            <div className="flex  py-2 flex-col">
              <p>Whatsapp only</p>
              <p>+‪234 810 873 5653‬</p>
            </div>
            <div className="flex gap-3 items-center py-2">
              <span>
                <Mail />
              </span>
              <div>
                <h2>Email us</h2>
                <p className="flex flex-col">
                  <span>info@novahillsconsulting.com</span>
                  <span>support@novahillsconsulting.com</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Card className="flex-1  py-10 content2">
          <CardContent>
            <form>
              <CardHeader>
                <CardTitle>
                  <h1 className="text-[#1b4962] poppins-bold text-2xl md:text-3xl">
                    Send us a message
                  </h1>
                </CardTitle>
                <CardDescription>
                  <p className="text-sm md:text-[16px] mb-6">
                    Use the form below to tell us more about your business
                    needs. A member of our team will get back to you shortly.
                  </p>
                </CardDescription>
              </CardHeader>
              <div className="flex gap-6 md:gap-2 md:items-center flex-col md:flex-row mb-6 mt-4 ">
                <div className="flex-1 flex flex-col gap-2 ">
                  <Label className="poppins-bold text-[18px] opacity-85">
                    Name <span className="text-red-400"> *</span>
                  </Label>
                  <Input type="text" placeholder="name" />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  {" "}
                  <Label className="poppins-bold text-[18px] opacity-85">
                    Email <span className="text-red-400"> *</span>
                  </Label>
                  <Input type="email" placeholder="Email" />
                </div>
              </div>

              <div className="flex gap-6 flex-col md:flex-row md:gap-2 md:items-center">
                <div className="flex-1 flex flex-col gap-2">
                  <Label className="poppins-bold text-[18px] opacity-85">
                    Phone <span className="text-red-400"> *</span>
                  </Label>
                  <Input type="number" placeholder="08139700448" />
                </div>
                <div className="flex-1 gap-2 flex flex-col">
                  <Label className="poppins-bold text-[18px] opacity-85">
                    Business Type
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select business type</SelectLabel>
                        <SelectItem value="apple">Start up</SelectItem>
                        <SelectItem value="banana">SME</SelectItem>
                        <SelectItem value="blueberry">Entrepreneur</SelectItem>
                        <SelectItem value="grapes">Other</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2 mb-6 ">
                <Label className="poppins-bold text-[18px] opacity-85">
                  Industry
                </Label>
                <Select>
                  <SelectTrigger className=" w-full">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectLabel>Select industry</SelectLabel> */}
                      {industries.map((data, index) => (
                        <SelectItem value={data} key={index}>
                          {data}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-6 flex flex-col gap-2 mb-6 ">
                <Label className="poppins-bold text-[18px] opacity-85">
                  Message <span>(Optional)</span>
                </Label>
                <Textarea
                  placeholder="please provide a correct evidence but this can be optional"
                  className="min-h-40"
                />
              </div>
              <Button type="submit" className="cursor-pointer">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
