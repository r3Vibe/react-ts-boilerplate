import { useTranslation } from "react-i18next";
import PageWrapper from "../../components/layout/PageWrapper";
import ContentWrapper from "../../components/common/ContentWrapper";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <PageWrapper title="Dashboard" description="">
      <ContentWrapper>
        <h1 className="text-3xl">{t("dashboard.welcome")}</h1>
      </ContentWrapper>
    </PageWrapper>
  );
}
