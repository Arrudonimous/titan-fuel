import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
  return (
    <div className="w-screen bg-primary h-screen flex items-center justify-center">
      <div className="w-4xl bg-secondary flex h-[60vh] rounded-2xl overflow-hidden">
        <div className="w-1/3 flex items-center justify-center">
          Bem vindo de volta
        </div>
        <div className="w-2/3 flex items-center justify-center bg-muted">
          direita
        </div>
      </div>
    </div>
  );
}
