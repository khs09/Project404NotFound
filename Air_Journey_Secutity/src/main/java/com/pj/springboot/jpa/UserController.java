package com.pj.springboot.jpa;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/")
public class UserController 
{

    private final UserService userService;

    public UserController(UserService userService) 
    {
        this.userService = userService;
    }

    @GetMapping
    public String home() 
    {
        return "redirect:/login";
    }

    @GetMapping("/login")
    public String loginForm(@RequestParam(value = "error", required = false) String error,
                            @RequestParam(value = "logout", required = false) String logout,
                            Model model) 
    {
        if (error != null) 
        {
            model.addAttribute("errorMessage", "아이디 또는 비밀번호가 잘못되었습니다.");
        }
        if (logout != null) 
        {
            model.addAttribute("logoutMessage", "로그아웃되었습니다.");
        }
        return "login"; 
    }

    @GetMapping("/register")
    public String registerForm(Model model) 
    {
        model.addAttribute("user", new User()); 
        return "register"; 
    }

    @PostMapping("/register")
    public String register(@ModelAttribute User user, RedirectAttributes redirectAttributes) 
    {
        try 
        {
            userService.registerUser(user);
            redirectAttributes.addFlashAttribute("successMessage", "회원가입이 완료되었습니다. 로그인해주세요.");
            return "redirect:/login";
        } catch (IllegalArgumentException e) {
            redirectAttributes.addFlashAttribute("errorMessage", e.getMessage());
            return "redirect:/register";
        }
    }

    @PostMapping("/loginProcess")
    public String loginProcess(@RequestParam("id") String id,
                               @RequestParam("password") String password,
                               RedirectAttributes redirectAttributes) 
    {
        if (userService.loginUser(id, password).isPresent()) 
        {
            return "redirect:/dashboard";
        } else 
        {
            redirectAttributes.addFlashAttribute("errorMessage", "아이디 또는 비밀번호가 올바르지 않습니다.");
            return "redirect:/login";
        }
    }

    @GetMapping("/dashboard")
    public String dashboard() 
    {
        return "dashboard"; 
    }
}
