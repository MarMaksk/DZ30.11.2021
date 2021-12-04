package com.company;

import java.util.Arrays;

public class lockal {
    public static void main(String[] args) {
        int[][] mass = new int[2][3];
        for (int i = 0; i < 2; i++)
            for (int j = 0; j < 3; j++)
                mass[i][j] = (int) (Math.random() * 10);

        for(int[] a : mass)
            System.out.println(Arrays.toString(a));

        int count = 0;
        for (int i = 0; i < 2; i++)
            for (int j = 1; j < 2; j++)
                if (mass[i][j - 1] < mass[i][j] && mass[i][j + 1] < mass[i][j])
                    count++;
        System.out.println(count);
    }

}
