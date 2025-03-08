import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import LogoContainer from "@/components/ui/logo-container";
import { NavigationRoutes } from "./navigation-routes";
import { NavLink } from "react-router-dom";
import ProfileContainer from "./profile-container";
import ToggleContainer from "./toggle-container";
import Container from "./container";
import { ModeToggle } from "./mode-toggle";


  const Header = () => {
    const { userId } = useAuth();

  return (
    <header className={cn("w-full border-b duration-150 transition-all ease-in-out")}>
      <Container>
        <div className="flex items-center gap-4 w-full h-20">

          {/* Logo*/}
          <LogoContainer />
          
          {/* navigation*/}
          <nav className="hidden md:flex items-center gap-3" >
            <NavigationRoutes />
            {userId && (
               <NavLink
               to={"/generate"}
               className={({ isActive }) => cn("text-base text-neutral-600",
                   isActive && "text-emerald-500 font-semibold")
               }>
              Take an Interview 
               </NavLink>
           ) } 
          </nav>
           <ModeToggle/>
          {/* profile*/}
          <div className="ml-auto flex items-center gap-6">
            <ProfileContainer/>

           </div>
          {/* mobile toggles*/}
          <ToggleContainer/>

        </div>
        </Container>
    </header>
  )
}

export default Header