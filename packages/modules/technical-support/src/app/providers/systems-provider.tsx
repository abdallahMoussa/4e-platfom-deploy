import React, {
  createContext,
  FC,
  useContext,
  useState,
  SetStateAction,
  useEffect,
} from "react";
import { useIntl } from "react-intl";
import { useUser } from "./user-provider";
export type contextProbType = {
  systems: {
    id: number;
    icon: string;
    title: string;
    checked: boolean;
    pathname: string;
    comingSoon: boolean;
  }[];
  setSystems: any;
};

const contextProb: contextProbType = {
  systems: [],
  setSystems: () => {},
};

export const SystemsContext = createContext<contextProbType>(contextProb);
export const useSystems = () => useContext(SystemsContext);

interface IProps {
  children: React.ReactNode;
}

const SystemsProvider: FC<IProps> = ({ children }) => {
  let intl = useIntl();
  let { user } = useUser();

  const [regaChecked, setRegaChecked] = useState(true);
  const [ncvcChecked, setNcvcChecked] = useState(true);
  const [gacChecked, setGacChecked] = useState(true);
  const [jwanChecked, setJwanChecked] = useState(true);
  const [rsnfChecked, setRsnfChecked] = useState(true);
  const [itiChecked, setItiChecked] = useState(true);

  const [systems, setSystems] = useState(null);

  const storedSystems = JSON.parse(localStorage.getItem("systems"));

  useEffect(() => {
    if (user?.username === "demo@rega.com") setRegaChecked(false);
    else if (user?.username === "demo@ncvc.com") setNcvcChecked(false);
    else if (user?.username === "demo@gac.com") setGacChecked(false);
    else if (user?.username === "demo@jwan.com") setJwanChecked(false);
    else if (user?.username === "demo@rsnf.com") setRsnfChecked(false);
    else if (user?.username === "demo@iti.com") setItiChecked(false);
  }, [user]);

  useEffect(() => {
    setSystems(
      storedSystems || [
        // نظام مكتب الرئيس التنفيذى
        {
          id: 1,
          icon: "bi bi-person-lines-fill text-primary",
          title: intl.formatMessage({ id: "CEOOffice" }),
          checked: true,
          pathname: "/ceo-workspace",
          comingSoon: false,
        },
        // نظام مكتب إدارة المشاريع
        {
          id: 2,
          icon: "fas fa-chart-bar text-info",
          title: intl.formatMessage({ id: "ProjectsManagement" }),
          checked: true,
          pathname: "/pmo-workspace",
          comingSoon: false,
        },
        // نظام إدارة المعرفة
        {
          id: 3,
          icon: "bi bi-lightbulb text-success",
          title: intl.formatMessage({ id: "KnowledgeManagement" }),
          checked: true,
          pathname: "/knowledge-workspace",
          comingSoon: false,
        },
        // نظام إدارة اللجان
        {
          id: 4,
          icon: "bi bi-journal-text text-danger",
          title: intl.formatMessage({ id: "CommitteeManagement" }),
          checked: true,
          pathname: "/committees-workspace",
          comingSoon: false,
        },
        // نظام إدارة الدعم الفنى
        {
          id: 5,
          icon: "bi bi-headset text-gblue",
          title: intl.formatMessage({ id: "TechnicalSupportManagement" }),
          checked: true,
          pathname: "/technical-support-workspace",
          comingSoon: false,
        },
        // نظام لوحة التحكم
        {
          id: 6,
          icon: "fad fa-users text-primary",
          title: intl.formatMessage({ id: "ControlCpanel" }),
          checked: true,
          pathname: "/admin-panel-workspace",
          comingSoon: false,
        },
        // نظام الآداء المؤسسي
        {
          id: 7,
          icon: "bi bi-graph-up-arrow text-warning",
          title: intl.formatMessage({ id: "OrganizationPerformance" }),
          checked: true,
          pathname: "/organization-performance-workspace",
          comingSoon: false,
        },
        // نظام الإعلام الرقمى
        {
          id: 8,
          icon: "bi bi-collection-play text-info",
          title: intl.formatMessage({ id: "DigitalMediaSystem" }),
          checked: true,
          pathname: "/digital-media-workspace",
          comingSoon: false,
        },
        // نظام إدارة المهام
        {
          id: 9,
          icon: "bi bi-list text-primary",
          title: intl.formatMessage({ id: "TasksManagementSystem" }),
          checked: true,
          pathname: "/tasks-details",
          comingSoon: false,
        },
        // نظام إدارة الإجتماعات
        {
          id: 10,
          icon: "fas fa-desktop text-danger",
          title: intl.formatMessage({ id: "MeetingsManagementSystem" }),
          checked: true,
          pathname: "/meetings-details",
          comingSoon: false,
        },
        // نظام إدارة الأجندة
        {
          id: 11,
          icon: "bi bi-calendar-month text-primary",
          title: intl.formatMessage({ id: "AgendaManagementSystem" }),
          checked: true,
          pathname: "/agenda-details",
          comingSoon: false,
        },
        // نظام الإستبيانات
        {
          id: 12,
          icon: "bi bi-ui-radios text-info",
          title: intl.formatMessage({ id: "QuestionnairesSystem" }),
          checked: true,
          pathname: "/questionnaires-details",
          comingSoon: false,
        },
        // نظام كونكت
        {
          id: 13,
          icon: "fab fa-hive text-success",
          title: intl.formatMessage({ id: "ConnectSystem" }),
          checked: true,
          pathname: "/connect-workspace",
          comingSoon: false,
        },
        // نظام مؤشر
        {
          id: 14,
          icon: "fas fa-chart-pie text-primary",
          title: intl.formatMessage({ id: "IndicatorSystem" }),
          checked: true,
          pathname: "/indicator-workspace",
          comingSoon: false,
        },
        // نظام إدارة التقارير
        {
          id: 15,
          icon: "fas fa-chart-line text-warning",
          title: intl.formatMessage({ id: "ReportsManagementSystem" }),
          checked: true,
          pathname: "/reports-workspace",
          comingSoon: false,
        },
        // نظام ڤيو
        {
          id: 16,
          icon: "far fa-eye text-danger",
          title: intl.formatMessage({ id: "ViewSystem" }),
          checked: true,
          pathname: "/view-workspace",
          comingSoon: false,
        },
        // نظام إدارة المخاطر
        {
          id: 17,
          icon: "fas fa-skull-crossbones text-danger",
          title: intl.formatMessage({ id: "RisksSystem" }),
          checked: true,
          pathname: "/risks-workspace",
          comingSoon: false,
        },
        // نظام إدارة الإستراتيجية
        {
          id: 18,
          icon: "fas fa-check-circle text-warning",
          title: intl.formatMessage({ id: "StrategySystem" }),
          checked: true,
          pathname: "/strategy-workspace",
          comingSoon: false,
        },
        // نظام البوابة الداخلية
        {
          id: 19,
          icon: "fas fa-external-link-square-alt text-primary",
          title: intl.formatMessage({ id: "InternalGateSystem" }),
          checked: true,
          pathname: "/internal-gate-workspace",
          comingSoon: false,
        },
        // نظام إدارة المشتريات
        {
          id: 20,
          icon: "bi bi-coin text-info",
          title: intl.formatMessage({ id: "PurchasesManagement" }),
          checked: true,
          pathname: "/purchases-workspace",
          comingSoon: false,
        },
        // نظام الإتصالات الإدارية
        {
          id: 21,
          icon: "fa-solid fa-tower-broadcast text-primary",
          title: intl.formatMessage({
            id: "AdministrativeCommunicationsSystem",
          }),
          checked: true,
          pathname: "/administrative-communications-workspace",
          comingSoon: false,
        },
        // نظام حوكمة البيانات
        {
          id: 22,
          icon: "bi bi-database-check text-gblue",
          title: intl.formatMessage({ id: "DataGovernanceSystem" }),
          checked: true,
          pathname: "/data-governance-workspace",
          comingSoon: false,
        },
        // نظام إدارة الإلتزام
        {
          id: 23,
          icon: "fas fa-business-time text-primary",
          title: intl.formatMessage({ id: "AdherenceSystem" }),
          checked: true,
          pathname: "/adherence-workspace",
          comingSoon: true,
        },
        // نظام إدارة التدريب
        {
          id: 24,
          icon: "fas fa-chalkboard-teacher text-gblue",
          title: intl.formatMessage({ id: "TrainingSystem" }),
          checked: true,
          pathname: "/training-workspace",
          comingSoon: true,
        },
        // نظام ذكاء الاعمال
        {
          id: 25,
          icon: "bi bi-robot text-primary",
          title: intl.formatMessage({ id: "BusinessAiSystem" }),
          checked: true,
          pathname: "/business-ai-workspace",
          comingSoon: true,
        },
        // نظام إدارة الطلبات
        {
          id: 26,
          icon: "fas fa-list-ol text-success",
          title: intl.formatMessage({ id: "RequestsSystem" }),
          checked: true,
          pathname: "/requests-workspace",
          comingSoon: true,
        },
        // نظام إدارة الإجراءات
        {
          id: 27,
          icon: "fas fa-directions text-gblue",
          title: intl.formatMessage({ id: "WorkflowManagementSystem" }),
          checked: true,
          pathname: "/workflow-workspace",
          comingSoon: false,
        },
        // نظام فرص
        {
          id: 28,
          icon: "fas fa-door-open text-warning",
          title: intl.formatMessage({ id: "OpportunitiesSystem" }),
          checked: true,
          pathname: "/opportunities-workspace",
          comingSoon: true,
        },
        // نظام تكامل
        {
          id: 29,
          icon: "fas fa-people-arrows text-success",
          title: intl.formatMessage({ id: "IntegrationSystem" }),
          checked: true,
          pathname: "/integration-workspace",
          comingSoon: true,
        },
        // نظام تحقق
        {
          id: 30,
          icon: "fas fa-user-shield text-danger",
          title: intl.formatMessage({ id: "VerificationSystem" }),
          checked: true,
          pathname: "/verification-workspace",
          comingSoon: true,
        },
        // نظام سمارت
        {
          id: 31,
          icon: "fas fa-dungeon text-primary",
          title: intl.formatMessage({ id: "SmartSystem" }),
          checked: true,
          pathname: "/smart-workspace",
          comingSoon: true,
        },
        // نظام إدارة التطبيقات
        {
          id: 32,
          icon: "fab fa-adn text-success",
          title: intl.formatMessage({ id: "ApplicationsManagementSystem" }),
          checked: true,
          pathname: "/applications-workspace",
          comingSoon: false,
        },
        // نظام التوقيع الإلكترونى
        {
          id: 33,
          icon: "fas fa-file-signature text-info",
          title: intl.formatMessage({ id: "ElectronicSignatureSystem" }),
          checked: true,
          pathname: "/electronic-signature-workspace",
          comingSoon: true,
        },
        // نظام إستمرارية الأعمال
        {
          id: 34,
          icon: "bi bi-shuffle text-primary",
          title: intl.formatMessage({ id: "BusinessContinuitySystem" }),
          checked: true,
          pathname: "/business-continuity-workspace",
          comingSoon: true,
        },
        // نظام تميز الأعمال
        {
          id: 35,
          icon: "fas fa-bookmark text-warning",
          title: intl.formatMessage({ id: "BusinessExcellenceSystem" }),
          checked: true,
          pathname: "/business-excellence-workspace",
          comingSoon: true,
        },
        // نظام البوابة الخارجية
        {
          id: 36,
          icon: "fas fa-torii-gate text-danger",
          title: intl.formatMessage({ id: "ExternalGateSystem" }),
          checked: true,
          pathname: "/external-gate-workspace",
          comingSoon: true,
        },
        // نظام حياكم
        {
          id: 37,
          icon: "fas fa-user-friends text-warning",
          title: intl.formatMessage({ id: "VisitorSystem" }),
          checked: true,
          pathname: "/visitor-workspace",
          comingSoon: true,
        },
        // نظام ادارة المرافق
        {
          id: 38,
          icon: "fas fa-building text-success",
          title: intl.formatMessage({ id: "UtilitySystem" }),
          checked: true,
          pathname: "/utility-workspace",
          comingSoon: true,
        },
        // نظام صناعة القرار
        {
          id: 39,
          icon: "fas fa-user-tie text-danger",
          title: intl.formatMessage({ id: "DecisionMakerSystem" }),
          checked: true,
          pathname: "/decision-maker-workspace",
          comingSoon: true,
        },
        // نظام إدارة الشراكات
        {
          id: 40,
          icon: "fa-solid fa-handshake text-primary",
          title: intl.formatMessage({ id: "PartnershipsManagementSystem" }),
          checked: true,
          pathname: "/partnership-system-workspace",
          comingSoon: false,
        },
      ]
    );
  }, [regaChecked, ncvcChecked, gacChecked, jwanChecked, rsnfChecked]);

  useEffect(() => {
    localStorage.setItem("systems", JSON.stringify(systems));
  }, [systems]);
  console.log("systems", systems);

  return (
    <SystemsContext.Provider
      value={{
        systems,
        setSystems,
      }}
    >
      {children}
    </SystemsContext.Provider>
  );
};

export default SystemsProvider;
