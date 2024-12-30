import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ThemeToggle } from "@/components/local";

type TMainHomePage = {
  title: string;
};

const MainHomePage: React.FC<TMainHomePage> = () => {
  const { t, i18n } = useTranslation();
  const myName = "";
  const [language, setLanguage] = useState<string>("en");
  console.log(language);
  function changeLanguage(e: any) {
    // const code = e.target.value;

    if (i18n.language !== e) {
      i18n.changeLanguage(e);
      setLanguage(e);
    }
  }

  return (
    <div className="flex justify-center bg-white">
      <ThemeToggle />
      <Select onValueChange={changeLanguage}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="fr">France</SelectItem>
          <SelectItem value="de">Germany</SelectItem>
          <SelectItem value="id">Indonesia</SelectItem>
        </SelectContent>
      </Select>
      <Card>
        <div>
          <h2>{t("title")}</h2>
          <p>{t("title")}</p>
        </div>
      </Card>
    </div>
  );
};

export default MainHomePage;
