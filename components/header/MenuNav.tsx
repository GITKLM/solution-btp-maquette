"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Travaux après sinistre",
    href: "/autres-travaux/apres-sinistre",
    description:
      "Rénovation complète, remise en état, intervention rapide",
  },
  {
    title: "Ravalement de façade",
    href: "/autres-travaux/ravalement-facade",
    description:
      "Ravalement, peinture, rattrapage et traitement des microfissures",
  },
]

export function MenuNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Recherche de fuite</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-[#76a04219] from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/recherche-fuite"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Expert en recherche de fuite
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Traces d&apos;infiltrations d&apos;eau sur le plafond, peinture qui cloque sur les murs, consommation d&apos;eau qui explose ou dégâts des eaux ?
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/recherche-fuite/compteur" title="Après Compteur">
              Surconsommation d&apos;eau? Compteur tourne tout le temps?
              </ListItem>
              <ListItem href="/recherche-fuite/degats-des-eaux" title="Dégats des eaux">
              Identifier l&apos;origine du problème ?
              </ListItem>
              <ListItem href="/recherche-fuite/toiture" title="Toit">
               Des infiltration d&apos;eau sur votre toiture-terasse?
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Travaux toiture</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-[#76a04219] from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/travaux-toiture"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Expert en travaux de toit-terrasse
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                     Nous sommes également spécialisés dans la recherche de problème concernant les toits-terrasses et la mise en place de solutions durables
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/travaux-toiture/etencheite" title="Etenchéité">
Application d&apos;une peinture impérméable, préserve la qualité
              </ListItem>
              <ListItem href="/travaux-toiture/peinture" title="Peinture">
Restaurer durablement la beauté de votre toiture              </ListItem>
              <ListItem href="/travaux-toiture/nettoyage" title="Nettoyage">
               Entretien rapide et efficace de vos toits
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Autres travaux</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/apropos" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              À Propos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#76a04219] hover:text-accent-foreground focus:bg-[#76a04219] focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
